module.exports = {
  pattern: "^(main|develop|production)$|^(tech|feat|hotfix|fix|rel(?:ease)?)/.+$",
  errorMsg:
    "🤨 La branche que tu essaies de pusher ne respecte pas nos conventions, tu peux la renommer avec `git branch -m <prefix-de-la-branche> / <que-fait-la-branche>`",
};
