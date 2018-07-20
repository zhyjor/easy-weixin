/**
 * 运行单个测试文件
 */

const execa = require('execa')
const inquirer = require('inquirer')
const Listr = require('listr')

inquirer.prompt({
  type: 'input',
  name: 'version',
  message: '[easy-weixin] Enter release version:',
  validate: function(value) {
    const pass = value.match(
      /^1|2\.\d\.\d+(\-(alpha|beta)\.\d+)?$/
    )
    if (pass) {
      return true
    }

    return 'Please enter a valid version number'
  }
}).then(answer => {
  inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: `Releasing ${answer.version} - are you sure? `
  }]).then(() => {
    const tasks = new Listr([
      {
        title: 'Build release.',
        task: () => execa.shell('npm run build')
      },
      {
        title: 'Git',
        task: () => {
          return new Listr([
            {
              title: 'Git add',
              task: () => execa.shell('git add -A')
            },
            {
              title: 'Git commit',
              task: (ctx, task) => execa.shell(`git commit -m \"[build] ${answer.version}\"`).catch(err => {
                task.skip('nothing to commit.')
              })
            }
          ])
        }
      },
      {
        title: 'num version...',
        task: () => execa.shell(`npm version ${answer.version} --message "[release] ${answer.version}"`)
      },
      {
        title: 'Git tags',
        task: () => {
          return new Listr([
            // {
            //   title: 'Git push tag',
            //   // task: () => execa.shell(`git push origin refs/tags/v${answer.version}`)
            // },
            {
              title: 'Git push',
              task: () => execa.shell('git push origin master')
            }
          ])
        }
      },
      {
        title: 'npm publish',
        task: () => {
          if (/alpha|beta/.test(answer.version)) {
            execa.shell('npm publish --tag next')
          } else {
            execa.shell('npm publish')
          }
        }
      }
    ])

    tasks.run().catch(err => {
      console.error(err)
    })
  })
})

