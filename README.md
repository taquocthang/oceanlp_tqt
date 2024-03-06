# Deploy Template

[[Deployment]](http://git.bpotech.com.vn/)

Execute command in GIT bash.

 `git config --global push.default simple`
 
 `git config --global alias.add-commit '!git add -A && git commit'`

 `sudo chmod -R 2775 .git`

 `sudo chown -R git:www-data [deploy folder]`

Rename file `deploy.php.example` to `deploy.php`

Set [[WEBHOOKS]](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/web_hooks/web_hooks.md)

URL : `[path/to/deploy/folder]/deploy.php`

[[Your local]](http://git.bpotech.com.vn/)

Execute command in GIT bash.

 `git config push.default simple`

 `git config alias.add-commit '!git add -A && git commit'`