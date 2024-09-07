import React from "react";

// Define prop types for reusability
interface CardSectionProps<T> {
  title: string;
  data: T[]; // Accept any array of data (Service, Product, etc.)
  renderCard: (item: T, index: number) => JSX.Element; // Function to render each card
}

const CardSection = <T,>({ title, data, renderCard }: CardSectionProps<T>) => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => renderCard(item, index))}
      </div>
    </div>
  );
};

export default CardSection;
