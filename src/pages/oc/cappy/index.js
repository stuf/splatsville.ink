import css from '@/styles/Cappy.module.css';

export default function CappyPage() {
  return (
    <main>
      <div className="container mx-auto">
        <article>
          <header>name</header>

          <section>
            <aside>
              <section>
                <header>Colors</header>
              </section>

              <section>
                <header>Gear</header>

                <dl>
                  <div>
                    <dt>Head</dt>
                    <dd>first</dd>
                  </div>

                  <div>
                    <dt>Clothes</dt>
                    <dd>second</dd>
                  </div>

                  <div>
                    <dt>Shoes</dt>
                    <dd>third</dd>
                  </div>
                </dl>
              </section>
            </aside>
          </section>
        </article>
      </div>
    </main>
  );
}
