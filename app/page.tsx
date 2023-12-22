import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Animal Deaths</h1>

      <div className="flex flex-wrap">
        <div className="w-1/3 p-2">
          <div>
            Photo from <a href="https://unsplash.com/de/@bhris1017?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christopher Carson</a> on <a href="https://unsplash.com/de/fotos/weisses-ferkel-kaut-heu-i4XLJmlYit4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            <Link href="/pigs">
              <Image src="/pig.jpg" alt="Description of the image" width={500} height={300} />
            </Link>
          </div>
        </div>

        <div className="w-1/3 p-2">
          <div>
            Photo from <a href="https://unsplash.com/de/@dave_george?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">David George</a> on <a href="https://unsplash.com/de/fotos/braune-kuh-auf-grunem-grasfeld-tagsuber-o41CI8825qU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            <Link href="/cattle">
              <Image src="/cattle.jpg" alt="Description of the image" width={500} height={300} />
            </Link>
          </div>
        </div>

        <div className="w-1/3 p-2">
          <div>
            Photo from <a href="https://unsplash.com/de/@cobybriant?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brian David</a> on <a href="https://unsplash.com/de/fotos/weisse-ente-mit-entenkuken-auf-braunem-nest-gi4p27XKVY8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
            <Link href="/chicken">
              <Image src="/chicken.jpg" alt="Description of the image" width={500} height={300} />
            </Link>
          </div>
        </div>
      </div>

    </main>
  )
}
