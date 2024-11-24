import Tags from '@/components/Tags';

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="text-center">
          <Tags>Introducing Layers</Tags>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Your AI design partner designed for business</span>
          <div className="text-white/15">{text}</div>
          <span className="text-lime-400 block">
            That&apos;s why we&apos;ve built Layer, an AI design tool
            that&apos;s easy to use, fast, and powerful.
          </span>
        </div>
      </div>
    </section>
  );
}
