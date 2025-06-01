import Image from "next/image"

const ThankYou = () => {
    return (
        <section>
            <div className="my-auto">
                <Image
                    src={"/images/icon-thank-you.svg"}
                    alt="Thank You Icon"
                    width={100}
                    height={100}
                    className="mx-auto mb-8"
                />
                <h1 className="text-3xl font-semibold text-marine-blue text-center mb-4">
                    Thank You!
                </h1>
                <p className="text-gray-500 text-center">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
                </p>
            </div>
        </section>
    )
}

export default ThankYou