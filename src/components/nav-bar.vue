<script>
import { authComputed } from '@state/helpers'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: { VuePerfectScrollbar },
  props: {
    user: {
      type: Object,
      required: false,
      default: () => ({})
    },
  },
  data() {
    return {}
  },
  computed: {
    ...authComputed,
  },
  methods: {
    toggleMenu() {
      this.$parent.toggleMenu()
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar()
    },
  },
}
</script>

<template>
  <!-- Topbar Start -->
  <div class="navbar-custom">
    <ul class="list-unstyled topnav-menu float-right mb-0">
      <li class="d-none d-sm-block">
        <form class="app-search">
          <div class="app-search-box">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search..." />
              <div class="input-group-append">
                <button class="btn" type="submit">
                  <i class="fe-search"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </li>

      <b-nav-item-dropdown right class="d-none d-lg-block">
        <template slot="button-content">
          <img
            src="@assets/images/flags/us.jpg"
            alt="user-image"
            class="mr-1"
            height="12"
          />
          <span class="align-middle"
            >English <i class="mdi mdi-chevron-down"></i>
          </span>
        </template>
        <b-dropdown-item href="#">
          <img
            src="@assets/images/flags/germany.jpg"
            alt="user-image"
            class="mr-1"
            height="12"
          />
          <span class="align-middle">German</span>
        </b-dropdown-item>

        <b-dropdown-item href="#"
          ><img
            src="@assets/images/flags/italy.jpg"
            alt="user-image"
            class="mr-1"
            height="12"
          />
          <span class="align-middle">Italian</span></b-dropdown-item
        >
        <b-dropdown-item href="#">
          <img
            src="@assets/images/flags/spain.jpg"
            alt="user-image"
            class="mr-1"
            height="12"
          />
          <span class="align-middle">Spanish</span>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <img
            src="@assets/images/flags/russia.jpg"
            alt="user-image"
            class="mr-1"
            height="12"
          />
          <span class="align-middle">Russian</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right class="notification-list">
        <template slot="button-content">
          <i class="fe-bell noti-icon"></i>
          <span class="badge badge-danger rounded-circle noti-icon-badge"
            >4</span
          >
        </template>

        <b-dropdown-text href="#" class="dropdown-item noti-title">
          <h5 class="m-0">
            <span class="float-right">
              <a href="" class="text-dark">
                <small>Clear All</small>
              </a> </span
            >Notification
          </h5>
        </b-dropdown-text>

        <b-dropdown-text href="#" class="p-0">
          <VuePerfectScrollbar v-once class="notification-items">
            <a
              href="javascript:void(0);"
              class="dropdown-item notify-item active"
            >
              <div class="notify-icon bg-soft-primary text-primary">
                <i class="mdi mdi-comment-account-outline"></i>
              </div>
              <p class="notify-details"
                >Doug Dukes commented on Admin Dashboard
                <small class="text-muted">1 min ago</small>
              </p>
            </a>
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon">
                <img
                  src="@assets/images/users/avatar-2.jpg"
                  class="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <p class="notify-details">Mario Drummond</p>
              <p class="text-muted mb-0 user-msg">
                <small>Hi, How are you? What about our next meeting</small>
              </p>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon">
                <img
                  src="@assets/images/users/avatar-4.jpg"
                  class="img-fluid rounded-circle"
                  alt=""
                />
              </div>
              <p class="notify-details">Karen Robinson</p>
              <p class="text-muted mb-0 user-msg">
                <small>Wow ! this admin looks good and awesome design</small>
              </p>
            </a>

            <!-- item-->
            <a href="javascript:void(0);" class="dropdown-item notify-item">
              <div class="notify-icon bg-soft-warning text-warning">
                <i class="mdi mdi-account-plus"></i>
              </div>
              <p class="notify-details"
                >New user registered.
                <small class="text-muted">5 hours ago</small>
              </p>
            </a>
          </VuePerfectScrollbar>

          <a
            href="javascript:void(0);"
            class="dropdown-item text-center text-primary notify-item notify-all"
          >
            View all
            <i class="fi-arrow-right"></i>
          </a>
        </b-dropdown-text>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right class="profile-dropdown">
        <template slot="button-content">
          <div class="nav-user mr-0 waves-effect waves-light">
            <img
              src="@assets/images/users/avatar-1.jpg"
              alt="user-image"
              class="rounded-circle"
            />
            <span class="pro-user-name ml-1">
              {{user ? user.name : ''}} <i class="mdi mdi-chevron-down"></i>
            </span>
          </div>
        </template>

        <b-dropdown-header id="dropdown-header-label" class="noti-title">
          <h6 class="text-overflow m-0">Welcome !</h6>
        </b-dropdown-header>

        <b-dropdown-item href="#">
          <i class="remixicon-account-circle-line"></i>
          <span>My Account</span>
        </b-dropdown-item>

        <b-dropdown-item href="#">
          <i class="remixicon-settings-3-line"></i>
          <span>Settings</span>
        </b-dropdown-item>

        <b-dropdown-item href="#">
          <i class="remixicon-wallet-line"></i>
          <span
            >My Wallet <span class="badge badge-success float-right">3</span>
          </span>
        </b-dropdown-item>

        <b-dropdown-item href="#">
          <i class="remixicon-lock-line"></i>
          <span>Lock Screen</span>
        </b-dropdown-item>

        <b-dropdown-item href="/logout">
          <i class="remixicon-logout-box-line"></i>
          <span>Logout</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>

      <li class="dropdown notification-list">
        <button
          class="btn btn-link nav-link right-bar-toggle waves-effect waves-light"
          @click="toggleRightSidebar"
        >
          <i class="fe-settings noti-icon"></i>
        </button>
      </li>
    </ul>

    <!-- LOGO -->
    <div class="logo-box">
      <a href="index.html" class="logo text-center">
        <span class="logo-lg">
          <img src="@assets/images/logo-light.png" alt="" height="20" />
          <!-- <span class="logo-lg-text-light">Xeria</span> -->
        </span>
        <span class="logo-sm">
          <!-- <span class="logo-sm-text-dark">X</span> -->
          <img src="@assets/images/logo-sm.png" alt="" height="24" />
        </span>
      </a>
    </div>

    <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
      <li>
        <button
          class="button-menu-mobile waves-effect waves-light"
          @click="toggleMenu"
        >
          <i class="fe-menu"></i>
        </button>
      </li>

      <b-nav-item-dropdown class="d-none d-lg-block" right>
        <template slot="button-content">
          Create New
          <i class="mdi mdi-chevron-down"></i>
        </template>
        <b-dropdown-item href="#">
          <i class="fe-briefcase mr-1"></i>
          <span>New Projects</span>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <i class="fe-user mr-1"></i>
          <span>Create Users</span>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <i class="fe-bar-chart-line- mr-1"></i>
          <span>Revenue Report</span>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <i class="fe-settings mr-1"></i>
          <span>Settings</span>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <i class="fe-headphones mr-1"></i>
          <span>Help & Support</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </ul>
  </div>
  <!-- end Topbar -->
</template>

<style lang="scss">
.notification-items {
  height: 220px;
}
.ps > .ps__scrollbar-y-rail {
  width: 8px !important;
  background-color: transparent !important;
}
.ps > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps.ps--in-scrolling.ps--y > .ps__scrollbar-y-rail > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y,
.ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y {
  width: 6px !important;
}
</style>
