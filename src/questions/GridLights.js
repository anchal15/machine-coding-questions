import React, { useState } from "react";
import "./GridLights.css";

const Cell = ({ filled, onClick, isDisabled }) => {
  return (
    <button
      type="button"
      className={`cell ${filled ? "cell-activated" : ""}`}
      disabled={isDisabled}
      onClick={onClick}
    />
  );
};

const GridLights = () => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = [...origOrder];
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    // deactivate
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  return (
    <div className="flex justify-center items-center flex-col gap-4 w-full">
      <div
        className="grid p-5 gap-5 border-2 border-black shadow-lg w-[500px]"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
