# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" 

if [ -s "$NVM_DIR/nvm.sh" ]; then
    if nvm_find_nvmrc > /dev/null 2>&1; then
        nvm install
        nvm use
    else
        nvm install lts/hydrogen
        nvm use lts/hydrogen
    fi
fi