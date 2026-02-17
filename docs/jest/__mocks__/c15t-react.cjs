exports.ConsentManagerProvider = ({ children }) => children;
exports.CookieBanner = function CookieBanner() {
  return null;
};
exports.ConsentManagerDialog = function ConsentManagerDialog() {
  return null;
};
exports.useConsentManager = () => ({
  has: () => false,
  hasConsented: () => false,
  setIsPrivacyDialogOpen: () => {},
});
