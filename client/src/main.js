// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Graphql Client
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    // URL of your Graphql
    uri: ''
  })
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
