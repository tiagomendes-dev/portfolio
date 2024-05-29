import { Badge } from "@/app/_components/ui/badge";

export default function Home() {
  return (
    <div className="m-2 min-h-[calc(100vh-14.5rem)] rounded-lg bg-white px-5 py-16 shadow-sm">
      <main className="flex flex-col items-center justify-center py-12 md:py-24">
        <div>
          <Badge variant="destructive">Programador Front-end</Badge>
          <h2 className="mb-10 mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Ola! O meu nome é <span className="font-bold">Tiago Mendes</span> 👋
          </h2>
          <p className="mb-10 text-pretty text-zinc-400">
            Da ideia à interação: convido você a explorar um universo digital
            envolvente e interativo. Combinando criatividade e habilidades
            técnicas, comprometido em transformar suas visões em experiências
            digitais memoráveis. Junte-se a mim nesta jornada única, onde cada
            linha de código conta uma história e cada design encanta.
          </p>
        </div>
        <h3 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          Sobre mim
        </h3>
        <div className="space-y-2 text-zinc-400">
          <p className="text-pretty">
            Minha jornada como programador começou de uma forma um tanto
            inusitada, mas essa experiência diversificada me tornou um
            profissional versátil e resiliente.
          </p>
          <p className="text-pretty">
            Minha primeira exposição à programação foi através da linguagem Lua.
            Inicialmente, Lua me atraiu pela sua simplicidade e eficiência, o
            que me permitiu entender o básico da lógica de programação e
            desenvolver pequenos scripts. Esta experiência inicial foi crucial
            para despertar o meu interesse pelo mundo da tecnologia.
          </p>
          <p className="text-pretty">
            Com o passar do tempo, senti a necessidade de explorar novas áreas e
            tentar desenvolver jogos usando C#. Trabalhar com C# e Unity Engine
            foi uma fase extremamente enriquecedora da minha carreira. A criação
            de jogos me ensinou a importância de estruturas de dados complexas,
            otimização de código e, principalmente, de uma interface de usuário
            atrativa e intuitiva.
          </p>
          <p className="text-pretty">
            Apesar do prazer que vi na criação de jogos, foi no desenvolvimento
            front-end que realmente me encontrei. A transição para o front-end
            foi um marco decisivo na minha trajetória. As tecnologias web, como
            HTML, CSS e JavaScript, me permitiram combinar meu amor pelo design
            visual com minhas habilidades de programação. Além disso, frameworks
            como React e Next abriram novas possibilidades para a criação de
            aplicações web dinâmicas e responsivas.
          </p>
          <p className="text-pretty">
            Hoje, como desenvolvedor front-end, estou constantemente aprendendo
            e me atualizando com as novas tendências e tecnologias. Valorizo
            muito a colaboração com outros profissionais, desde designers até
            desenvolvedores back-end, para garantir que o produto final não seja
            apenas funcional, mas também esteticamente agradável e centrado no
            usuário.
          </p>
        </div>
      </main>
    </div>
  );
}
