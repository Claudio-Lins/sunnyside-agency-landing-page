import React from 'react'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div>
      <section className="grid w-full grid-cols-2 md:hidden">
        <Image
          src="/images/mobile/image-gallery-milkbottles.jpg"
          width={376}
          height={376}
          alt="image-milkbottles"
        />
        <Image
          src="/images/mobile/image-gallery-orange.jpg"
          width={376}
          height={376}
          alt="image-orange"
        />
        <Image
          src="/images/mobile/image-gallery-cone.jpg"
          width={376}
          height={376}
          alt="image-cone"
        />
        <Image
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          width={376}
          height={376}
          alt="image-sugar-cubes"
        />
      </section>
      <section className="md:flex hidden">
        <Image
          src="/images/desktop/image-gallery-milkbottles.jpg"
          width={355}
          height={450}
          alt="image-milkbottles"
        />
        <Image
          src="/images/desktop/image-gallery-orange.jpg"
          width={355}
          height={450}
          alt="image-orange"
        />
        <Image
          src="/images/desktop/image-gallery-cone.jpg"
          width={355}
          height={450}
          alt="image-cone"
        />
        <Image
          src="/images/desktop/image-gallery-sugarcubes.jpg"
          width={355}
          height={450}
          alt="image-sugar-cubes"
        />
      </section>
    </div>
  )
}
