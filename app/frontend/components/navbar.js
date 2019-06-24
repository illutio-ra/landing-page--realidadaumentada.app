import React, { Component } from 'react'
import { NavLink } from '~base/router'
import { withRouter } from 'react-router'
import storage from '~base/storage'
import api from '~base/api'
import tree from '~core/tree'
import Image from '~base/components/image'
import { FormattedMessage, injectIntl } from 'react-intl'
import HubspotForm from 'react-hubspot-form'
import classNames from 'classnames'

const langs = {
  'en-US': 'En',
  'es-MX': 'Es',
}
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenu: 'close',
      profileDropdown: 'is-hidden',
      dropCaret: 'fa fa-caret-down',
      lang: langs[window.localStorage.getItem('lang')],
      classNameModal: '',
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  languageSettingDispatcher(lang) {
    this.setState({
      lang: langs[lang],
    })
    this.handleNavbarBurgerClick()
    window.dispatchEvent(
      new CustomEvent('lang', {
        detail: { lang },
      }),
    )
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        profileDropdown: 'is-hidden',
        dropCaret: 'fa fa-caret-down',
      })
    }
  }

  toggleBtnClass() {
    const { profileDropdown } = this.state
    if (this.wrapperRef) {
      if (profileDropdown === 'is-hidden') {
        this.setState({
          profileDropdown: 'is-active',
          dropCaret: 'fa fa-caret-up',
        })
      } else {
        this.setState({
          profileDropdown: 'is-hidden',
          dropCaret: 'fa fa-caret-down',
        })
      }
    }
  }

  async handleLogout() {
    const { history } = this.props

    try {
      await api.del('/user')
    } catch (err) {
      console.error('Error removing token, logging out anyway ...')
    }

    storage.remove('jwt')
    tree.set('jwt', null)
    tree.set('user', null)
    tree.set('loggedIn', false)
    tree.commit()

    history.push('/')
  }

  handleNavbarBurgerClick() {
    const { mobileMenu } = this.state
    if (mobileMenu === 'open') {
      this.setState({ mobileMenu: 'close' })
    } else {
      this.setState({ mobileMenu: 'open' })
    }
  }

  handleModal() {
    this.setState({
      classNameModal: 'is-active',
    })
  }

  render() {
    const { mobileMenu } = this.state
    let navbarMenuClassName = 'navbar-menu'
    if (mobileMenu === 'open') {
      navbarMenuClassName = 'navbar-menu is-active'
    }

    const { lang, dropCaret, profileDropdown } = this.state

    const { loggedIn, history } = this.props

    let navButtons
    let navMainLink
    let avatar
    let username

    const links = [
      {
        title: 'link_home',
        to: '/#',
        className: 'is-primary',
      },
      {
        title: 'link_app',
        to: '/#portfolio',
        className: 'is-primary',
      },
      {
        title: 'link_solutions',
        to: '/#solutions',
        className: 'is-primary',
      },
      {
        title: 'link_pricing',
        to: '/#pricing',
        className: 'is-primary',
      },
      {
        title: 'link_blog',
        to: '/#blog',
        className: 'is-primary',
      },
    ]

    if (loggedIn) {
      avatar = 'http://1bigappstore.com/images/avt-default.jpg'

      if (tree.get('user')) {
        username = tree.get('user').screenName
      }

      navButtons = (
        <div className="navbar-end">
          <div className="navbar-item is-size-7 has-text-grey is-capitalized">
            Welcome
            {username}
          </div>
          <div className="is-flex is-align-center">
            <img
              className="is-rounded"
              src={avatar}
              width="40"
              height="45"
              alt="Avatar"
            />
          </div>
          <div className="dropdown is-active is-right" ref={this.setWrapperRef}>
            <div className="dropdown-trigger is-flex">
              <a
                href="#"
                className="navbar-item"
                onClick={() => this.toggleBtnClass()}
              >
                <span className="icon">
                  <i className={dropCaret} />
                </span>
              </a>
            </div>
            <div className={profileDropdown}>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <NavLink
                    className="dropdown-item"
                    onClick={() => this.toggleBtnClass()}
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                  <a
                    className="dropdown-item"
                    onClick={() => this.handleLogout()}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

      navMainLink = (
        <NavLink exact className="navbar-item" to="/app">
          <Image src="/public/img/racam.png" alt="ra cam" />
        </NavLink>
      )
    } else {
      navButtons = (
        <div className="navbar-end">
          {links.map((link) => {
            const className = classNames('navbar-item', {
              active: history.location.hash == link.to.replace('/#', '#'),
            })

            return (
              <NavLink to={link.to} className={className} onClick={() => this.handleNavbarBurgerClick()}>
                <FormattedMessage id={`general.${link.title}`} />
              </NavLink>
            )
          })}
          <div className="navbar-item">
            <a
              className="navbar-item"
              data-target="modal"
              aria-haspopup="true"
              onClick={() => this.handleModal()}
            >
              <FormattedMessage id="general.link_contact" />
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <FormattedMessage id="general.link_login" />
              </a>
              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  href="https://realidadaumentada.app/admin/login"
                  target="_blank"
                >
                  <span className="margin-sides-icon">
                    <FormattedMessage id="general.link_login" />
                  </span>
                </a>
                <a
                  className="navbar-item"
                  href="https://realidadaumentada.app/admin/register"
                  target="_blank"
                >
                  <span className="margin-sides-icon">
                    <FormattedMessage id="general.register" />
                  </span>
                </a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">{lang}</a>

              <div className="navbar-dropdown">
                {lang === 'En' && (
                  <a
                    className="navbar-item"
                    onClick={() => this.languageSettingDispatcher('es-MX')}
                  >
                    <span className="margin-sides-icon">Es</span>
                  </a>
                )}
                {lang === 'Es' && (
                  <a
                    className="navbar-item"
                    onClick={() => this.languageSettingDispatcher('en-US')}
                  >
                    <span className="margin-sides-icon">En</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )

      navMainLink = (
        <NavLink className="navbar-item" exact to="/">
          <Image src="/public/img/racam.svg" alt="ra cam" />
        </NavLink>
      )
    }

    return (
      <nav className="navbar is-fixed-top" role="navigation">
        <div className="navbar-brand">
          {navMainLink}

          <div
            className="navbar-burger burger"
            onClick={(e) => this.handleNavbarBurgerClick(e)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={navbarMenuClassName}>{navButtons}</div>
        <div className={`modal ${this.state.classNameModal}`}>
          <div className="modal-background" />
          <div className="modal-content">
            <div className="box">
              <h1 className="has-text-centered title is-2 is-margin-bottom-medium">
                <FormattedMessage id="general.contact_us_footer" />
              </h1>
              <HubspotForm
                portalId="2705799"
                formId="d8b7a2ac-f5bb-4b7a-9963-d8e30844250a"
                onSubmit={() => console.log('Submit!')}
                onReady={(form) => console.log('Form ready!')}
                loading={<div>Loading...</div>}
              />
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => this.setState({ classNameModal: '' })}
          />
        </div>
      </nav>
    )
  }
}

export default withRouter(injectIntl(NavBar))
