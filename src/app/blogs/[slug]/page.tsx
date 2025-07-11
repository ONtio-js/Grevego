import React from "react";
import Image from "next/image";
import { HeartIcon, MessageCircleIcon, ShareIcon } from "lucide-react";


const BlogPage = () => {
  return (
    <div className="space-y-10 px-5 py-10 md:px-20">
      <div className="flex w-full items-start justify-between">
        <div className="flex max-w-[60%] flex-col gap-3">
          <h1 className="text-3xl font-semibold">
            Eco-friendly packaging: The future of sustainable{" "}
          </h1>
          <p className="text-lg text-gray-700">
            Sustainable Freshness, delivered with Care
          </p>
          <p className="text-gray-700">
            With our solar-powered cold storage and sustainable logistics, we
            guarantee that your fresh produce arrives at its best. This not only
            minimizes food waste but also cuts down on carbon emissions, making
            a positive impact on the environment.
          </p>
        </div>
        <p className="text-gray-700">July 11, 2025 | 5 min read</p>
      </div>
      <Image
        src="/home/blog.jpg"
        alt="Grevego Journal"
        width={300}
        height={200}
        className="h-[500px] w-full rounded-2xl object-cover"
      />
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, id
        laudantium. Dolore velit dolorum dolorem maxime rem optio facere
        asperiores repellendus perspiciatis facilis voluptas, ratione quae quas
        consequatur voluptates eum vitae officia? Quae, veritatis ea deserunt
        modi quis doloribus, at eius quo a autem, ex dolore dicta alias ipsa
        tempora blanditiis quidem! Dolorum blanditiis quasi quam fuga suscipit
        ratione deserunt tempore, consequatur perferendis quaerat quo eos
        possimus nisi eaque maiores ex itaque nam voluptatum aut impedit
        necessitatibus a labore. Sit debitis, ex accusamus at odit atque. Quae
        iste asperiores atque animi provident voluptate, accusantium repudiandae
        earum soluta alias eveniet veritatis. <br /> <br />
        Ipsa quae amet reprehenderit, quidem dicta porro accusamus odit
        asperiores culpa corrupti quisquam nesciunt sunt libero expedita earum
        sit recusandae, nostrum officiis error at aliquam laudantium aspernatur
        deserunt voluptates? Quo earum deserunt dolore modi ut numquam quia
        magnam est qui, fuga similique dolor iure tempora eos distinctio
        quibusdam quidem vitae doloribus? Debitis eum non aliquam vitae libero
        reprehenderit in, quos perspiciatis ipsa sunt impedit quod assumenda
        dignissimos quibusdam minima quo omnis numquam quasi. Illum sequi, autem
        non et minima natus cum? Ad modi laboriosam aliquam id esse est nihil
        nobis numquam repellat enim beatae ratione nisi sequi, aspernatur culpa,
        error, ducimus repudiandae non doloremque ab sapiente. Eum blanditiis
        asperiores porro deserunt. Blanditiis consectetur facere ex dolore
        perferendis in animi officia eaque aut dolores, sint veritatis nemo odit
        laborum consequuntur eius laboriosam aliquid, illo rem! Tenetur,
        necessitatibus voluptatem quod, corporis dignissimos pariatur voluptate
        quasi perferendis non corrupti est quisquam, voluptatum labore quo
        fugiat inventore optio iusto aut! Quaerat magnam consectetur, delectus
        repellendus dolor laboriosam molestiae possimus maxime deserunt maiores
        aliquam sunt sint. Omnis nam natus ipsa velit quibusdam sequi, cumque
        vitae, nostrum aspernatur, qui ducimus. Dolorum tempora eum obcaecati
        placeat tempore saepe, accusantium perspiciatis nam fugit, recusandae
        facilis. Fugiat, quae labore?
      </p>
      <div className="grid grid-cols-2 gap-5">
        <Image
          src="/home/blog.jpg"
          alt="Grevego Journal"
          width={300}
          height={200}
          className="h-[520px] w-full rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-5">
          <Image
            src="/home/blog.jpg"
            alt="Grevego Journal"
            width={300}
            height={200}
            className="h-[250px] w-full rounded-2xl object-cover"
          />
          <Image
            src="/home/blog.jpg"
            alt="Grevego Journal"
            width={300}
            height={200}
            className="h-[250px] w-full rounded-2xl object-cover"
          />
        </div>
      </div>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, id
        laudantium. Dolore velit dolorum dolorem maxime rem optio facere
        asperiores repellendus perspiciatis facilis voluptas, ratione quae quas
        consequatur voluptates eum vitae officia? Quae, veritatis ea deserunt
        modi quis doloribus, at eius quo a autem, ex dolore dicta alias ipsa
        tempora blanditiis quidem! Dolorum blanditiis quasi quam fuga suscipit
        ratione deserunt tempore, consequatur perferendis quaerat quo eos
        possimus nisi eaque maiores ex itaque nam voluptatum aut impedit
        necessitatibus a labore. Sit debitis, ex accusamus at odit atque. Quae
        iste asperiores atque animi provident voluptate, accusantium repudiandae
        earum soluta alias eveniet veritatis. <br /> <br />
        Ipsa quae amet reprehenderit, quidem dicta porro accusamus odit
        asperiores culpa corrupti quisquam nesciunt sunt libero expedita earum
        sit recusandae, nostrum officiis error at aliquam laudantium aspernatur
        deserunt voluptates? Quo earum deserunt dolore modi ut numquam quia
        magnam est qui, fuga similique dolor iure tempora eos distinctio
        quibusdam quidem vitae doloribus? Debitis eum non aliquam vitae libero
        reprehenderit in, quos perspiciatis ipsa sunt impedit quod assumenda
        dignissimos quibusdam minima quo omnis numquam quasi. Illum sequi, autem
        non et minima natus cum? Ad modi laboriosam aliquam id esse est nihil
        nobis numquam repellat enim beatae ratione nisi sequi, aspernatur culpa,
        error, ducimus repudiandae non doloremque ab sapiente. Eum blanditiis
        asperiores porro deserunt. Blanditiis consectetur facere ex dolore
        perferendis in animi officia eaque aut dolores, sint veritatis nemo odit
        laborum consequuntur eius laboriosam aliquid, illo rem! Tenetur,
        necessitatibus voluptatem quod, corporis dignissimos pariatur voluptate
        quasi perferendis non corrupti est quisquam, voluptatum labore quo
        fugiat inventore optio iusto aut! Quaerat magnam consectetur, delectus
        repellendus dolor laboriosam molestiae possimus maxime deserunt maiores
        aliquam sunt sint. Omnis nam natus ipsa velit quibusdam sequi, cumque
        vitae, nostrum aspernatur, qui ducimus. Dolorum tempora eum obcaecati
        placeat tempore saepe, accusantium perspiciatis nam fugit, recusandae
        facilis. Fugiat, quae labore?
      </p>
      <div className="flex items-center gap-10 text-muted-foreground font-medium">
        <div className="flex items-center gap-2">
            <HeartIcon className="w-6 h-6" />
          <p className="font-meddium">100</p>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircleIcon className="w-6 h-6" /> <p className="font-medium">Comment</p>
        </div>
        <div className="flex items-center gap-2">
          <ShareIcon className="w-6 h-6" /> <p className="font-medium">Share</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;