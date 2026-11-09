(typeof LocalizationManifestReady != "undefined"
  ? LocalizationManifestReady
  : function () {
      if (!window.g_rgPendingLocManifests) window.g_rgPendingLocManifests = [];
      window.g_rgPendingLocManifests.push(arguments);
    })("loyaltyrewards", "manifest", {
  RewardsReaction_1: "Deep Thoughts",
  RewardsReaction_2: "Heartwarming",
  RewardsReaction_3: "Hilarious",
  RewardsReaction_4: "Hot Take",
  RewardsReaction_5: "Poetry",
  RewardsReaction_6: "Extra Helpful",
});
