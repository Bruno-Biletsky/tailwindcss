# instalando o tailwind
npm install -D tailwindcss postcss autoprefixer
# gerando arquivo tailwind
npx tailwindcss init -p

# configurano o taiwind.config -> adicionar no content[]
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",

# adicionando as 3 linhas de base no index.css (procurando no servidor tailwind)
@tailwind base;
@tailwind components;
@tailwind utilities;

# adicionar no index.html
<script src="https://cdn.tailwindcss.com"></script>

# adicionar extensão para autocomplete nas tags
-> Tailwind CSS IntelliSense

# estilizar pelo class name
<h1 className="text text-8xl underline text-center text-red-600">Teste</h1>

# usar a documentação 
Na documentação tem todas as tags explicadas para serem inseridas na class