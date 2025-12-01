import { faAppleWhole, faShield, faTruck } from "@fortawesome/free-solid-svg-icons"
import { Card } from "@/components/card/Card"

const featuresData = [
    {
        icon: faAppleWhole,
        iconColor: 'text-red-300',
        title: "Fresh and Organic",
        description: "All our products are fresh and organic, ensuring you get the best quality and best taste.",
    },
    {
        icon: faShield,
        iconColor: 'text-gray-300',
        title: 'Safe and Secure',
        description: "We ensure that your transactions are safe and secure with our advanced security measures.",
    },
    {
        icon: faTruck,
        iconColor: 'text-yellow-300',
        title: "Fast and Easy",
        description: "Our products are fast and easy to order, and we deliver them right to your doorstep.",
    },
]
export const Features = () => {
    return (
        <div className="max-w-5xl mx-auto pt-[100px]">
            <h2 className="text-3xl font-bold text-center">Features</h2>
            <p className="text-lg py-4 text-center">Find the best food for you and your family</p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 py-12">
                {featuresData.map((feature, index) => (
                    <Card key={index} title={feature.title} description={feature.description} icon={feature.icon} iconColor={feature.iconColor} className={`flex flex-col items-center justify-center shadow-lg shadow-${feature.iconColor} pt-6`} hoverEffect={false} />
                ))}
            </div>
        </div>
    )
}
