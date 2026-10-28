# LL Beauty Clinic — one page

Site institucional de página única do LL Beauty Clinic, studio de beleza no
Centro de Bragança Paulista (SP). Sobrancelhas, cílios, unhas, micropigmentação,
depilação e maquiagem, com três especialistas em uma agenda só.

## Como ver

Abrir `index.html` no navegador já funciona. Para ver com o servidor local,
do jeito mais próximo do ar:

```bash
python -m http.server 8765
```

E acessar http://localhost:8765.

## Como está montado

HTML, CSS e JavaScript escritos à mão, sem framework e sem build. Três arquivos
de verdade:

| Arquivo | O que faz |
|---|---|
| `index.html` | a página inteira, em doze blocos |
| `css/estilo.css` | todo o estilo, escrito mobile first: a base é o celular e as media queries (700px, 1020px, 1180px) só alargam |
| `js/script.js` | monta os blocos repetidos (serviços, equipe, depoimentos, dúvidas), revela as seções na rolagem e liga os trilhos horizontais |

`agendar.html` é a rota única de agendamento: todos os botões do site apontam
para ela, e ela leva para a agenda do studio. Trocar de plataforma de
agendamento no futuro mexe só nesse arquivo.

As imagens ficam em `img/`.

## Acessibilidade e desempenho

A página respeita `prefers-reduced-motion`, funciona sem JavaScript (o conteúdo
montado por script é o complemento, não a espinha), não tem rolagem horizontal
em nenhuma largura e usa fontes do sistema no corpo do texto.

---

Feito por [Apenas Sites](https://apenassites.com.br).
