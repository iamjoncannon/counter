module.exports = {
  apps: [{
    name: 'Counter',
    script: './main.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-185-228-130.us-west-2.compute.amazonaws.com',
      key: process.env.key,
      ref: 'origin/master',
      repo: 'https://github.com/iamjoncannon/counter.git',
      path: '/home/ubuntu/Counter',
      'post-deploy': 'sudo npm install && sudo pm2 startOrRestart ecosystem.config.js'
    }
  }
}