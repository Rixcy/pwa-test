<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Rixcy</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/posts">Posts</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="activeUser" text="Options" right>
            <b-dropdown-item href="#" @click.prevent="logout">Profile</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item
            v-else-if="!activeUser && loadingUser === false"
            href="#"
            @click.prevent="login">
            Login
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<style lang="scss">
@import 'src/assets/css/global.scss';
</style>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeUser: null,
      loadingUser: false
    }
  },
  async created () {
    await this.refreshActiveUser()
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    '$route': 'refreshActiveUser'
  },
  methods: {
    login () {
      this.$auth.loginRedirect()
    },
    async refreshActiveUser () {
      this.loadingUser = true
      this.activeUser = await this.$auth.getUser()
      this.loadingUser = false
    },
    async logout () {
      await this.$auth.logout()
      await this.refreshActiveUser()
      this.$router.push('/')
    }
  }
}
</script>
