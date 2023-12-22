import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Link href="/pigs">
        <Image src="/pig.jpg" alt="Description of the image" width={500} height={300} />
      </Link>
      Foto von <a href="https://unsplash.com/de/@bhris1017?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Christopher Carson</a> auf <a href="https://unsplash.com/de/fotos/weisses-ferkel-kaut-heu-i4XLJmlYit4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    </main>
  )
}
