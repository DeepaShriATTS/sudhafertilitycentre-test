import React, { useState } from "react";

const risks = [
  {
    title: "Increased risk of heart disease and stroke",
    description:
      "Excess weight strains the heart, increasing chances of cardiovascular problems and stroke.",
  },
  {
    title: "Higher likelihood of type 2 diabetes",
    description:
      "Being overweight can lead to insulin resistance, a key factor in developing type 2 diabetes.",
  },
  {
    title: "Elevated blood pressure (hypertension)",
    description:
      "Extra body weight increases blood pressure, which strains the arteries and heart.",
  },
  {
    title:
      "Increased risk of certain cancers (e.g., breast, colon, kidney, gallbladder)",
    description:
      "Obesity is linked to higher rates of some cancers due to chronic inflammation and hormone imbalances.",
  },
  {
    title: "Greater chance of developing sleep apnea and breathing problems",
    description:
      "Excess fat around the neck can block airways during sleep, causing breathing difficulties.",
  },
  {
    title: "Higher risk of osteoarthritis due to extra strain on joints",
    description:
      "Carrying extra weight puts pressure on joints, especially knees and hips, causing wear and tear.",
  },
  {
    title: "Increased risk of fatty liver disease and gallbladder disease",
    description:
      "Fat accumulation in the liver and gallbladder can lead to inflammation and impaired function.",
  },
  {
    title: "Mental health issues like depression, anxiety, and low self-esteem",
    description:
      "Social stigma and physical discomfort can contribute to psychological stress and mood disorders.",
  },
  {
    title: "Increased risk of metabolic syndrome",
    description:
      "A cluster of conditions including high blood sugar, blood pressure, and cholesterol, increasing heart disease risk.",
  },
  {
    title: "Poor blood lipid profile (high cholesterol and triglycerides)",
    description:
      "Obesity often leads to unhealthy cholesterol and triglyceride levels, raising cardiovascular risk.",
  },
  {
    title: "Higher chance of developing gastroesophageal reflux disease (GERD)",
    description:
      "Excess weight can increase pressure on the stomach, causing acid reflux and heartburn.",
  },
  {
    title: "Reduced mobility and physical function",
    description:
      "Extra weight limits movement and endurance, affecting daily activities and quality of life.",
  },
  {
    title: "Increased risk of infertility and complications during pregnancy",
    description:
      "Obesity can disrupt hormonal balance, affecting fertility and pregnancy outcomes.",
  },
  {
    title: "Higher risk of developing insulin resistance",
    description:
      "Body cells become less responsive to insulin, leading to elevated blood sugar levels.",
  },
  {
    title: "Increased likelihood of developing kidney disease",
    description:
      "Excess weight can impair kidney function through increased blood pressure and diabetes risk.",
  },
  {
    title: "Greater risk of developing varicose veins and venous insufficiency",
    description:
      "Extra pressure on leg veins impairs blood flow, causing vein swelling and discomfort.",
  },
  {
    title: "Increased inflammation throughout the body",
    description:
      "Obesity promotes chronic low-grade inflammation, contributing to multiple diseases.",
  },
  {
    title: "Higher risk of developing dementia and cognitive decline",
    description:
      "Obesity-related factors may impair brain health and increase dementia risk.",
  },
  {
    title:
      "Increased risk of skin conditions such as infections and irritation",
    description:
      "Skin folds and sweating increase vulnerability to infections and rashes.",
  },
  {
    title: "Poor wound healing and increased risk of infections",
    description:
      "Obesity can slow healing and weaken the immune system, increasing infection risk.",
  },
];


  const underweightrisks = [
    {
      title: "Nutritional Deficiencies",
      description: "Lack of essential vitamins and minerals weakens immunity and overall health."
    },
    {
      title: "Weakened Immune System",
      description: "Being underweight reduces the body’s ability to fight infections effectively."
    },
    {
      title: "Osteoporosis and Bone Fragility",
      description: "Low body weight leads to decreased bone density, increasing fracture risk."
    },
    {
      title: "Anemia",
      description: "Deficiency in iron and nutrients causes low red blood cells and chronic fatigue."
    },
    {
      title: "Fertility Issues",
      description: "Underweight women may experience irregular periods or difficulty conceiving."
    },
    {
      title: "Delayed Growth and Development",
      description: "Children and teens may have impaired growth due to insufficient nutrition."
    },
    {
      title: "Muscle Weakness and Wasting",
      description: "Lack of calories and protein leads to loss of muscle mass and strength."
    },
    {
      title: "Cold Intolerance",
      description: "Reduced body fat lowers insulation, making it harder to keep warm."
    },
    {
      title: "Fatigue and Low Energy",
      description: "Limited energy reserves cause tiredness and poor physical endurance."
    },
    {
      title: "Increased Risk of Complications During Surgery",
      description: "Underweight patients may recover slower and have higher infection risk."
    },
    {
      title: "Hair Loss and Skin Problems",
      description: "Nutrient shortages often cause hair thinning and dry, unhealthy skin."
    },
    {
      title: "Mental Health Concerns",
      description: "Higher chances of anxiety and depression linked to nutrition and body image."
    },
    {
      title: "Increased Mortality Risk",
      description: "Severe underweight status can raise the risk of death from various causes."
    },
  ];

export default function BMICalculators() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const [heightUnit, setHeightUnit] = useState("ft"); // ft or cm
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [cm, setCm] = useState("");

  const [weight, setWeight] = useState(""); // kg
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    const w = Number(weight);
    const a = Number(age);
    let heightMeters = 0;

    if (!gender) return setError("Please select gender");
    if (a < 18 || a > 100) return setError("Age must be between 18 and 100");
    if (w < 30 || w > 300) return setError("Weight must be 30–300 kg");

    if (heightUnit === "ft") {
      const f = Number(feet);
      const i = Number(inches);
      if (f < 4 || f > 9) return setError("Feet must be 4–9");
      if (i < 0 || i > 11) return setError("Inches must be 0–11");
      heightMeters = (f * 12 + i) * 0.0254;
    } else {
      const c = Number(cm);
      if (c < 120 || c > 230) return setError("Height must be 120–230 cm");
      heightMeters = c / 100;
    }

    setError("");

    const bmiValue = (w / (heightMeters * heightMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  const getProgressColor = () => {
    if (bmi < 18.5) return "bg-blue-500";
    if (bmi < 25) return "bg-green-500";
    if (bmi < 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getProgressValue = () => {
    if (bmi < 18.5) return 25;
    if (bmi < 25) return 50;
    if (bmi < 30) return 75;
    return 100;
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 bg-white border rounded-xl shadow">
        <h2 className="text-3xl font-semibold mb-4">BMI Calculator</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Gender */}
          <div>
            <label className="text-sm font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="text-sm font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Height (Unit + Input together) */}
          <div className="md:col-span-1">
            <label className="text-sm font-medium">Height</label>

            <select
              value={heightUnit}
              onChange={(e) => setHeightUnit(e.target.value)}
              className="w-full border rounded-md px-3 py-2 mb-2"
            >
              <option value="ft">Feet / Inches</option>
              <option value="cm">Centimeters</option>
            </select>

            {heightUnit === "ft" ? (
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Feet"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  className="border rounded-md px-3 py-2"
                />
                <input
                  type="number"
                  placeholder="Inches"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  className="border rounded-md px-3 py-2"
                />
              </div>
            ) : (
              <input
                type="number"
                placeholder="Height in cm"
                value={cm}
                onChange={(e) => setCm(e.target.value)}
                className="border rounded-md px-3 py-2 w-full"
              />
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="text-sm font-medium">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={calculateBMI}
          className="mt-6 w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-md"
        >
          Calculate BMI
        </button>

        {error && <p className="mt-4 text-red-600">{error}</p>}

        {bmi && (
          <div className="mt-6 p-5 bg-blue-50 rounded-lg space-y-3">
            <p className="text-xl font-bold text-blue-700">BMI: {bmi}</p>
            <p>
              Category: <strong>{category}</strong>
            </p>

            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className={`h-4 rounded-full ${getProgressColor()}`}
                style={{ width: `${getProgressValue()}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-700">
              Healthy BMI (18.5–24.9) supports better fertility, hormone balance
              and overall health.
            </p>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-4">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          Health Risks Related to Being Overweight
        </h2>
        <ul className="space-y-6 text-gray-700">
          {risks.map(({ title, description }, idx) => (
            <li
              key={idx}
              className="hover:text-red-600 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-1 text-gray-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>

          <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        Health Risks Related to Being Underweight
      </h2>
      <ul className="space-y-6 text-gray-700">
        {underweightrisks.map(({ title, description }, idx) => (
          <li key={idx} className="hover:text-blue-600 transition-colors duration-200">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-1 text-gray-600">{description}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
