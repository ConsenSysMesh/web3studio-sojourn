export default async function analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  await Promise.all([
    import(/* webpackChunkName: "autotrack" */ 'autotrack/lib/plugins/clean-url-tracker'),
    import(/* webpackChunkName: "autotrack" */ 'autotrack/lib/plugins/outbound-link-tracker'),
    import(/* webpackChunkName: "autotrack" */ 'autotrack/lib/plugins/max-scroll-tracker'),
    import(/* webpackChunkName: "autotrack" */ 'autotrack/lib/plugins/page-visibility-tracker')
  ]);

  window.ga =
    window.ga ||
    function() {
      (ga.q = ga.q || []).push(arguments);
    };

  const ga = window.ga;

  ga.l = +new Date();

  ga('create', 'UA-129226585-1', 'auto');

  ga('require', 'outboundLinkTracker');
  ga('require', 'cleanUrlTracker');
  ga('require', 'maxScrollTracker');
  ga('require', 'pageVisibilityTracker');

  ga('send', 'pageview');
}
