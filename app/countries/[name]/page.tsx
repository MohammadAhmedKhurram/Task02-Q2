import CountryCard from "@/app/component/CountryCardCom";
import Link from "next/link";

export default function CountrysInfo({ params }: { params: { name: string } }) {
  const countrysData = [
    {
      Name: "China",
      Population: "1.425 billion",
      Capital: "Beijing",
      Bonus_Fun_Fact:
        "China has the longest continuous civilization, dating back over 4,000 years, and it is home to the Great Wall, the longest man-made structure in the world.",
    },
    {
      Name: "USA",
      Population: "335 million",
      Capital: "Washington, D.C.",
      Bonus_Fun_Fact:
        "The United States has no official language, though English is the most widely spoken. The country is also home to the world’s largest economy.",
    },
    {
      Name: "India",
      Population: "1.428 billion",
      Capital: "New Delhi",
      Bonus_Fun_Fact:
        "India is the largest democracy in the world, and it’s also the birthplace of yoga, which dates back over 5,000 years.",
    },
    {
      Name: "Brazil",
      Population: "216 million",
      Capital: "Brasília",
      Bonus_Fun_Fact:
        "Brazil is the only country in South America that speaks Portuguese, and it’s home to the Amazon Rainforest, the largest tropical rainforest in the world.",
    },
    {
      Name: "Japan",
      Population: "124 million",
      Capital: "Tokyo",
      Bonus_Fun_Fact:
        "Japan has more than 6,800 islands, and its people have the longest life expectancy in the world. The country is also famous for its cherry blossoms, which bloom every spring.",
    },
  ];

  const selectedCountry = countrysData.find(
    (country) => country.Name === params.name
  );

  if (!selectedCountry) {
    return <div>Country not found!</div>;
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "aliceblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CountryCard
        Name={selectedCountry.Name}
        Population={selectedCountry.Population}
        Capital={selectedCountry.Capital}
        BonusFunFact={selectedCountry.Bonus_Fun_Fact}
      />

      <Link href="./../../countries">
        <button
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "#D73E10",
            paddingTop: "10px ",
            paddingBottom: "10px ",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Back To Country Page
        </button>
      </Link>
    </div>
  );
}