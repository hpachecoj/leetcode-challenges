class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


function geraArvore(n){
    if(n === 0) return [];

    function recursiva(inicio, fim){
        if(inicio > fim) return [null];

        const todasArvores = [];

        for(let i = inicio; i <= fim; inicio++){
            const esquerda = recursiva(inicio, i - 1);
            const direita = recursiva(i + 1, fim);
        }
        for(const esquerda of arovreEsquerda){
            for(const direita of arvoreDireita){
                const raiz = new TreeNode();
                raiz.esquerda = esquerda;
                raiz.direita = direita;
                todasArvores.push(raiz);
            }
        }
    }
}