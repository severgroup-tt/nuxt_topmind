export default ({ app: { router } }, inject) => {

  function create() {
    window.$tmt = window.$tmt || function () {
      ($tmt.q = $tmt.q || []).push(arguments);
    };
    window.$tmt('init', '<%= options.clientId %>', '<%= options.trackerId %>', { initApiCall: false });

    inject('tmt', window.$tmt);

    if (<%= options.trackPathChange %>)
    {
      router.afterEach((to, from) => {
        $tmt('pageview');
      });
    }
  }
  create();
};
