import clsx from 'clsx';

import css from '@/styles/Cappy.module.css';

export default function CappyPage() {
  return (
    <main>
      <div className="container mx-auto">
        <article>
          <header>name</header>

          <section>
            <aside className="space-y-4">
              <section>
                <header>Colors</header>

                <dl className={clsx(css.spec)}>
                  <div>
                    <dt>Hair</dt>
                    <dd className={clsx(css.color, 'bg-[#435bf3]')}></dd>
                  </div>

                  <div>
                    <dt>Eyes</dt>
                    <dd className={clsx(css.color)}></dd>
                  </div>

                  <div>
                    <dt>Skin</dt>
                    <dd className={clsx(css.color)}></dd>
                  </div>
                </dl>
              </section>

              <section>
                <header>Gear</header>

                <dl className={clsx(css.spec)}>
                  <div>
                    <dt>Head</dt>
                    <dd className={clsx(css.big)}>first</dd>
                  </div>

                  <div>
                    <dt>Clothes</dt>
                    <dd className={clsx(css.big)}>second</dd>
                  </div>

                  <div>
                    <dt>Shoes</dt>
                    <dd className={clsx(css.big)}>third</dd>
                  </div>
                </dl>
              </section>
            </aside>
          </section>

          <section>
            <header>LORE OMG</header>

            <div>LORE M IPSUM TO BE CONTINUED</div>
          </section>
        </article>
      </div>
    </main>
  );
}
