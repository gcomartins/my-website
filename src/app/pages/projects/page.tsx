import Link from 'next/link';

const projetos = [
  { id: 1, nome: 'Projeto 1', descricao: 'Descrição do Projeto 1', link: '#' },
  { id: 2, nome: 'Projeto 2', descricao: 'Descrição do Projeto 2', link: '#' },
];

export default function Projects() {
  return (
    <div>
      <h1>Meus Projetos</h1>
      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.id}>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>
            <a href={projeto.link}>Veja mais</a>
          </li>
        ))}
      </ul>
      <Link href="/"><a>Voltar para Home</a></Link>
    </div>
  );
}
