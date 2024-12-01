import { fs, path, YAML } from 'zx';
const config = {
  twitter: {
    behavior: 'classical',
    url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Twitter/Twitter.yaml',
  },
  google: {
    behavior: 'classical',
    url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Google/Google.yaml',
  },
  youtube: {
    behavior: 'classical',
    url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml',
  },
  telegram: {
    behavior: 'classical',
    url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml',
  },
  github: {
    behavior: 'classical',
    url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/GitHub/GitHub.yaml',
  },

  // self
  ai: {
    behavior: 'domain',
    url: 'https://raw.v2raysocks.com/liaoyinglong/rules/main/ai.yaml',
  },
  crypto: {
    behavior: 'domain',
    url: 'https://raw.v2raysocks.com/liaoyinglong/rules/main/crypto.yaml',
  },
  game: {
    behavior: 'domain',
    url: 'https://raw.v2raysocks.com/liaoyinglong/rules/main/game.yaml',
  },
};

export const providers = Object.entries(config).map(([name, item]) => ({
  name,
  type: 'http',
  path: `./rule-set/${name}.yaml`,
  interval: 86400,
  ...item,
}));

const outputPath = path.resolve(__dirname, '../example.yaml');

const output = await YAML.stringify({
  'rule-providers': providers,
});

fs.writeFileSync(outputPath, output);
