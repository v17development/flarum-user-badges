let loading = false;
let hasLoaded = false;
let onLoadedCallbacks = [];

export default function loadAllBadges(onLoadedCallback) {
  // Badges have already been loaded
  if (hasLoaded) {
    onLoadedCallback();
    return;
  }

  // Load badges if not already loading
  if (!loading) {
    loading = true;

    // Load badges
    app.store.find('badges').then(() => {
      hasLoaded = true;
      loading = false;

      onLoadedCallback();

      // Give callback
      onLoadedCallbacks.map((cb) => cb());

      m.redraw();
    });
  } else {
    onLoadedCallbacks.push(onLoadedCallback);
  }
}
