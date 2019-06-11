import React, { Component } from 'react'
import { NavLink } from '~base/router'
import { withRouter } from 'react-router'
import storage from '~base/storage'
import api from '~base/api'
import tree from '~core/tree'
import Image from '~base/components/image'
import { FormattedMessage, injectIntl } from 'react-intl'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenu: 'close',
      profileDropdown: 'is-hidden',
      dropCaret: 'fa fa-caret-down',
      lang: window.localStorage.getItem('lang'),
    }

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  languageSettingDispatcher(lang) {
    this.setState({
      lang,
    })
    window.dispatchEvent(
      new CustomEvent('lang', {
        detail: { lang },
      }),
    )
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
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
    if (this.wrapperRef) {
      if (this.state.profileDropdown === 'is-hidden') {
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
    if (this.state.mobileMenu === 'open') {
      this.setState({ mobileMenu: 'close' })
    } else {
      this.setState({ mobileMenu: 'open' })
    }
  }

  render() {
    let navbarMenuClassName = 'navbar-menu'
    if (this.state.mobileMenu === 'open') {
      navbarMenuClassName = 'navbar-menu is-active'
    }

    const {
      lang,
    } = this.state

    const {
      loggedIn,
    } = this.props

    let navButtons
    let navMainLink
    let avatar
    let username
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
                  <i className={this.state.dropCaret} />
                </span>
              </a>
            </div>
            <div className={this.state.profileDropdown}>
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
          <div className="navbar-item">
            <NavLink className="navbar-item" exact to="/">
              <FormattedMessage id="general.link_home" />
            </NavLink>
            <NavLink className="navbar-item" exact to="/#app">
              <FormattedMessage id="general.link_app" />
            </NavLink>
            <NavLink className="navbar-item" exact to="/#soluctions">
              <FormattedMessage id="general.link_solutions" />
            </NavLink>
            <NavLink className="navbar-item" exact to="/#pricing">
              <FormattedMessage id="general.link_pricing" />
            </NavLink>
            <NavLink className="navbar-item" exact to="/blog">
              <FormattedMessage id="general.link_blog" />
            </NavLink>
            <NavLink className="navbar-item" exact to="/log-in">
              <FormattedMessage id="general.link_login" />
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <Image src={`/public/img/lang/${lang}.png`} alt="ra cam" />
              </a>

              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  onClick={() => this.languageSettingDispatcher('es-MX')}
                >
                <Image src="/public/img/lang/es-MX.png" alt="ra cam" />
                <span className="margin-sides-icon">
                  Es
                </span>

                </a>
                <a
                  className="navbar-item"
                  onClick={() => this.languageSettingDispatcher('en-US')}
                >
                <Image src="/public/img/lang/en-US.png" alt="ra cam" />
                <span className="margin-sides-icon">
                  En
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )

      navMainLink = (
        <NavLink className="navbar-item" exact to="/">
          <Image src="/public/img/racam.png" alt="ra cam" />
        </NavLink>
      )
    }

    return (
      <nav className="navbar" role="navigation">
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
      </nav>
    )
  }
}

export default withRouter(injectIntl(NavBar))
