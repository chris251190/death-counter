import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>Animal Deaths</h1>

      <div>
      <Link href="/pigs">
        <Image src="/pig.jpg" alt="Description of the image" width={500} height={300} />
      </Link>
      Foto von <a href="https://unsplash.com/de/@bhris1017?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christopher Carson</a> auf <a href="https://unsplash.com/de/fotos/weisses-ferkel-kaut-heu-i4XLJmlYit4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </div>

      <div>
      <Link href="/cattle">
        <Image src="/cattle.jpg" alt="Description of the image" width={500} height={300} />
      </Link>
      Foto von <a href="https://unsplash.com/de/@dave_george?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">David George</a> auf <a href="https://unsplash.com/de/fotos/braune-kuh-auf-grunem-grasfeld-tagsuber-o41CI8825qU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
      </div>
     
    </main>
  )
}
