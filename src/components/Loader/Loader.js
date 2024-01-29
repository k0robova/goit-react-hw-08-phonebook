import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="30"
      visible={true}

      // position="absolute"
      // top="50"
      // left="50"
      // transform="tranclate(-50, -50)"
    />
  );
};

//  position: absolute;
//   top: 40%; /* Встановлює верхню позицію на 40% від вертикального краю */
//   left: 50%; /* Встановлює горизонтальну позицію на середину */
//   transform: translate(-50%, -50%);
//   text-align: center;
