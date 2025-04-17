import { Button } from "@heroui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <article>
        <div className="w-[380px] flex flex-col items-center gap-2">
          <figure className="">
            <img
              alt="MemeList"
              className="w-[128px] rounded-xl"
              src="./assets/images/logo.png"
            />
          </figure>
          <p>
            React додаток - довідник про популярні меми, створений за допомогою
            бібліотеки HeroUI
          </p>
          <div className="flex flex-col sm:flex-row gap-8 mt-3">
            <Link href="/table">
              <Button color="default" variant="faded">
                Довідник в таблиці
              </Button>
            </Link>
            <Link href="/list">
              <Button color="default" variant="faded">
                Довідник в списку
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
