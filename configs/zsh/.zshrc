# Set up the prompt
# Download Znap, if it's not there yet.
[[ -f ~/Git/zsh-snap/znap.zsh ]] ||
    git clone --depth 1 -- \
        https://github.com/marlonrichert/zsh-snap.git ~/zsh/zsh-snap

source ~/zsh/zsh-snap/znap.zsh  # Start Znap

# `znap prompt` makes your prompt visible in just 15-40ms!
# znap prompt sindresorhus/pure

# `znap source` automatically downloads and starts your plugins.
znap source marlonrichert/zsh-autocomplete
znap source zsh-users/zsh-autosuggestions
znap source zsh-users/zsh-syntax-highlighting

# `znap eval` caches and runs any kind of command output for you.
znap eval iterm2 'curl -fsSL https://iterm2.com/shell_integration/zsh'

# `znap function` lets you lazy-load features you don't always need.
znap function _pyenv pyenv 'eval "$( pyenv init - --no-rehash )"'
compctl -K    _pyenv pyenv

autoload -Uz promptinit
promptinit
prompt adam1

setopt histignorealldups sharehistory

# Use emacs keybindings even if our EDITOR is set to vi
bindkey -e

# Keep 1000 lines of history within the shell and save it to ~/.zsh_history:
HISTSIZE=1000
SAVEHIST=1000
HISTFILE=~/.zsh_history

eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
eval "$(oh-my-posh --init --shell zsh --config https://raw.githubusercontent.com/SiJiL82/utils/main/configs/oh-my-posh/omp.json)"

# bat config
export BAT_THEME="ansi-dark"

# PATH additions
path+=('$HOME/bin')
export path

# Aliases
alias ls="logo-ls"
alias lsa="logo-ls -a"
alias lsla="logo-ls -la"
alias cat="batcat --paging=never"
alias cata="batcat -A --paging=never"
alias version="lsb_release -a"

# Custom functions
function mkcd {
  last=$(eval "echo \$$#")
  if [ ! -n "$last" ]; then
    echo "Enter a directory name"
  elif [ -d $last ]; then
    echo "\`$last' already exists"
  else
    mkdir $@ && cd $last
  fi
}

function gclonecd() {
  git clone "$1" && cd "$(basename "$1" .git)"
}

ucd () {
  cdto=".."
  if [ ! -z "$1" ]; then
    for ((i=1; i<$1; i++)); do
      cdto="${cdto}/.."
    done
  fi
  if [ ! -z "$2" ]; then
    cdto="${cdto}/${2}"
  fi
  cd "$cdto"
}

cdc () {
  cd "$1" && code .
}

ucdc () {
  ucd "$@" && code .
}

venv () {
  python3 -m venv venv
  source venv/bin/activate
}
