/* Programa para conversão de temperatura*/

/*Função auxiliar */
float converte(float c)
{
    float f;
    f = 1.8*c + 32;
    return f;
}

/* Função principal */
int main (void)
{
    float tl;
    float t2;
    /* Mostra mensagem para o usuário*/
    printf("Digite a temperatura em Celsius: ");
    scanf("%f",&tl);
    /**Faz a conversão chamando a função auxiliar */
    t2 = converte(tl);
    /**Exibe o resultado */
    printf("Temperatura em Fahrenheit:  %f\n", t2);
    return 0;
}