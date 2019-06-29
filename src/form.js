import { h, Component } from 'preact';

import { Connect } from 'redux-zero/preact';
import { actions } from './actions';

import {
  Anonymous,
  ReplyIcon,
  PushIcon,
  EmailIcon,
  TwitterIcon,
  FacebookIcon,
} from './icons';
import { supportsServiceWorkers, substitute } from './utils';
import s from './style.css';
import cls from 'classnames';

export default (inlineProps) => (
  <Connect mapToProps={mapToProps} actions={actions}>
    {(props) => <Form {...props} {...inlineProps} />}
  </Connect>
);

const mapToProps = ({ config, session, form }) => {
  const {
    disableAnonymousLogin,
    disableSocialLogin,
    enableWebsite,
    enableEmailNotifications,
    disableProfilePictures,
    localStorageSupported,
  } = config;
  const { userPic, loginProvider } = form;
  const showSocial = localStorageSupported && !disableSocialLogin;
  const isLoggedIn = session.isAuthenticated();

  return {
    disableAnonymousLogin,
    disableSocialLogin,
    enableWebsite,
    enableEmailNotifications,
    disableProfilePictures,
    showSocial,
    form,
    isLoggedIn,
  };
};

class Form extends Component {
  saveRef = (ref) => {
    this.form = ref;
  };

  onSend = (e) => {
    e.preventDefault();
    return this.props.sendComment(this.form, this.props.replyToComment);
  };

  onPreview = (e) => {
    e.preventDefault();
    return this.props.previewComment(this.form, this.props.replyToComment);
  };

  onHidePreview = (e) => {
    e.preventDefault();
    return this.props.hideCommentPreview(this.form, this.props.replyToComment);
  };

  onImageError = () => {
    this.props.onFormImageError();
  };

  render({
    disableAnonymousLogin,
    replyToComment,
    disableSocialLogin,
    enableWebsite,
    enableEmailNotifications,
    disableProfilePictures,
    showSocial,
    form,
    sendComment,
    onPushToggle,
    onEmailToggle,
    onFacebookLogin,
    onTwitterLogin,
    onUsernameInput,
    onEmailInput,
    onWebsiteInput,
    onTextInput,
    onLogout,
    isLoggedIn,
  }) {
    const textareaPlaceholder = replyToComment
      ? substitute(__('replyTo'), {
          name: replyToComment.username,
        })
      : `${__('writeAComment')} (${__('ctrlEnterToSend')})`;

    return (
      <div
        className={cls(s.form, {
          [s.noSocial]: !showSocial,
          [s.noUserPic]: disableProfilePictures,
        })}
      >
        <form ref={this.saveRef}>
          {!isLoggedIn && (
            <div className={s.row}>
              {!disableAnonymousLogin && (
                <div className={s.left}>
                  <div className={s.inputGroup}>
                    <div className={s.formPicContainer}>
                      {!disableProfilePictures && (
                        <UserPic
                          userPic={form.userPic}
                          userUrl={form.website}
                          loginProvider={form.loginProvider}
                          onLogout={onLogout}
                          onImageError={this.onImageError}
                        />
                      )}
                      <span className={cls(s.fontBody1)}>
                        {__('anonymousCommentHeader')}
                      </span>
                    </div>
                    <label className={cls(s.fontBody2)}>
                      {__('name')}
                      <input
                        value={form.username}
                        required={true}
                        max={255}
                        onInput={onUsernameInput}
                        className={cls(s.inpt, s.fontBody2, {
                          [s.dirty]: form.dirty,
                        })}
                      />
                    </label>
                    <label className={cls(s.fontBody2)}>
                      {__('email')}
                      <input
                        type="email"
                        value={form.email}
                        className={cls(s.inpt, s.fontBody2, {
                          [s.dirty]: form.dirty,
                        })}
                        max={255}
                        onInput={onEmailInput}
                      />
                    </label>
                    {enableWebsite && (
                      <label className={cls(s.fontBody2)}>
                        {__('website')}
                        <input
                          type="url"
                          value={form.website}
                          className={cls(s.inpt, s.fontBody2, {
                            [s.dirty]: form.dirty,
                          })}
                          onInput={onWebsiteInput}
                        />
                      </label>
                    )}
                  </div>
                </div>
              )}
              {showSocial && !disableAnonymousLogin && (
                <div className={s.separator}>
                  <div className={s.line} />
                  <div className={cls(s.word, s.fontBody1)}>or</div>
                  <div className={s.line} />
                </div>
              )}
              {showSocial && (
                <div className={s.right}>
                  <div className={cls(s.fontBody1)}>
                    {__('socialCommentHeader')}
                  </div>
                  <button
                    tabindex="0"
                    role="button"
                    title={__('loginWithFacebook')}
                    aria-label={__('loginWithFacebook')}
                    onClick={onFacebookLogin}
                    className={cls(s.btn, s.fontButton3)}
                    type="button"
                  >
                    <FacebookIcon />
                  </button>
                  <button
                    tabindex="0"
                    role="button"
                    title={__('loginWithTwitter')}
                    aria-label={__('loginWithTwitter')}
                    onClick={onTwitterLogin}
                    className={cls(s.btn, s.fontButton3)}
                    type="button"
                  >
                    <TwitterIcon />
                  </button>
                </div>
              )}
            </div>
          )}
          {!disableProfilePictures && isLoggedIn && (
            <UserPic
              userPic={form.userPic}
              userUrl={form.website}
              loginProvider={form.loginProvider}
              onLogout={onLogout}
              onImageError={this.onImageError}
            />
          )}
          {form.preview && !form.previewLoading && (
            <div className={cls(s.comment, s.preview)}>
              <label className={cls(s.fontBody2)}>{textareaPlaceholder}</label>
              <div
                className={s.content}
                dangerouslySetInnerHTML={{ __html: form.preview }}
              />
            </div>
          )}
          {form.previewLoading && (
            <div className={cls(s.comment, s.preview)}>
              <label className={cls(s.fontBody2)}>{textareaPlaceholder}</label>
              {__('loadingComments')}
            </div>
          )}
          {!form.preview && !form.previewLoading && (
            <div className={cls(s.row, s.textareaContainer)}>
              <label className={cls(s.fontBody2)}>
                {textareaPlaceholder}
                <textarea
                  className={cls(s.inpt, s.fontBody2, {
                    [s.dirty]: form.dirty,
                  })}
                  value={form.text}
                  required={true}
                  onInput={onTextInput}
                  onKeyDown={(e) => {
                    if (e.ctrlKey && e.keyCode == 13) {
                      this.onSend(e);
                    } else if (e.metaKey && e.keyCode == 13) {
                      this.onSend(e);
                    }
                  }}
                />
              </label>
              <div className={s.textareaBtns}>
                {supportsServiceWorkers() && (
                  <Toggle
                    icon={<PushIcon />}
                    title={__('toggleNotificationsPush')}
                    onClick={onPushToggle}
                    value={form.pushNotifications}
                  />
                )}
                {enableEmailNotifications && (
                  <Toggle
                    icon={<EmailIcon />}
                    title={__('toggleNotificationsEmail')}
                    onClick={onEmailToggle}
                    value={form.emailNotifications}
                  />
                )}
              </div>
            </div>
          )}
          {Object.keys(form.errors).length > 0 && (
            <div className={s.row}>
              {Object.keys(form.errors).map((errorKey) => {
                return h('p', {}, [form.errors[errorKey]]);
              })}
            </div>
          )}
          <div className={cls(s.row, s.last)}>
            <button
              role="button"
              onClick={this.onSend}
              disabled={form.blocked ? 'disabled' : ''}
              type="button"
              className={cls(s.btn, s.small, s.primary, s.fontButton3)}
            >
              <ReplyIcon />
              <span>{form.blocked ? __('sending') : __('send')}</span>
            </button>
            {form.preview ? (
              <button
                type="button"
                onClick={this.onHidePreview}
                className={cls(s.btn, s.secondary, s.fontButton3)}
              >
                {__('hidePreview')}
              </button>
            ) : (
              <button
                type="button"
                onClick={this.onPreview}
                className={cls(s.btn, s.secondary, s.fontButton3)}
              >
                {__('preview')}
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

function Toggle({ icon, title, value, onClick }) {
  return (
    <button
      aria-checked={value ? 'true' : 'false'}
      className={cls(s.btn, s.toggle, { [s.on]: value })}
      onClick={onClick}
      role="switch"
      tabindex="0"
      aria-label={title}
      title={title}
    >
      {icon}
    </button>
  );
}

export function UserPic({
  userPic,
  onImageError,
  userUrl,
  loginProvider,
  onLogout,
}) {
  return (
    <UserPicContainer userUrl={userUrl}>
      {userPic ? (
        <img onError={onImageError} alt={__('userPic')} src={userPic} />
      ) : (
        <Anonymous />
      )}
      {loginProvider === 'twitter' &&
        (onLogout ? (
          <button
            onClick={onLogout}
            type="button"
            title="logout"
            aria-label="logout"
            className={cls(s.btn, s.logout)}
          >
            <TwitterIcon />
          </button>
        ) : (
          <div className={cls(s.logout)}>
            <TwitterIcon />
          </div>
        ))}
      {loginProvider === 'fb' &&
        (onLogout ? (
          <button
            onClick={onLogout}
            type="button"
            title="logout"
            aria-label="logout"
            className={cls(s.btn, s.logout)}
          >
            <FacebookIcon />
          </button>
        ) : (
          <div className={cls(s.logout)}>
            <FacebookIcon />
          </div>
        ))}
    </UserPicContainer>
  );
}

function UserPicContainer({ userUrl, children }) {
  return userUrl ? (
    <a className={s.userPic} href={userUrl} target="_blank" rel="noopener">
      {children}
    </a>
  ) : (
    <div className={s.userPic}>{children}</div>
  );
}