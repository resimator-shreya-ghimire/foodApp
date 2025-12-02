import { Banner } from "@/components/banner/Banner";
import { Image } from "@/components/image/Image";

export const WebBanner = () => {
    return (
        <section className="relative bg-gradient-to-b from-gradient-1 to-white w-full h-[90vh] flex flex-col items-stretch pt-component-lg">
            <Banner layout="flex-row" className="flex h-[90vh] max-w-6xl mx-auto overflow-hidden gap-10">
                <Banner.Item className="w-full flex flex-col px-8 lg:w-1/2 md:w-full">
                    <h1 className="text-6xl font-bold" >Discover the best food</h1>
                    <p className="text-lg font-bold py-4">Find the best food for you and your family</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente ullam ut voluptas possimus iusto earum, amet at autem facilis natus itaque commodi, repellat quaerat adipisci laboriosam, velit eveniet fugiat laudantium nulla ipsa! Temporibus provident repellat inventore cum aspernatur dolorum nulla vitae voluptatibus deserunt. Aut deserunt dolor saepe illo. Ipsum?
                </Banner.Item>
                <Banner.Item className="w-1/2 flex items-center hidden md:flex lg:flex">
                    <Image src="/mcpic.png" alt="Hero" className="w-[800px] h-[600px]" />
                </Banner.Item>
            </Banner>
        </section>
    )
}
