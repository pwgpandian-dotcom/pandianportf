import React from "react";
import Container from "./Container";
import { statisticsData } from "@/constants/data";

const Statistics = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statisticsData.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-primary">
                
              </h3>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
