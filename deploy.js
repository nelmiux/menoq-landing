import { createRequire } from 'module';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const deploy = () => {
  const stage = process.env.REACT_APP_ENV || 'dev';
  const content = `bucket="menoq-landing-tf-state-${stage}"`;
  const isEnv = fs.existsSync(
    path.join(__dirname, `terraform/stages/${stage}.tfvars`),
  );
  const env = isEnv ? stage : 'dev';
  process.env.REACT_APP_ENV = env;

  try {
    execSync(
      `terraform -chdir=terraform init --backend-config=${content} --reconfigure`,
      {
        stdio: 'inherit',
      },
    );
    execSync(
      `terraform -chdir=terraform apply -var-file="stages/${env}.tfvars" -auto-approve`,
      {
        stdio: 'inherit',
      },
    );
  } catch (error) {
    console.error('Deploy failed:', error);
    process.exit(1);
  }
};

deploy();
