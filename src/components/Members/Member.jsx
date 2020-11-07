import { useRef, useEffect } from 'react';


const Member = ({ member, selected, setSelected }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const w = canvas.width * 0.05;
    const h = canvas.height * 0.05;

    // ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.font = 'bold 14px "Open Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const draw = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = '#FF009E';
      ctx.fillRect(0, canvas.height - 30, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.fillText(`@${member}`, canvas.width / 2, canvas.height - (30 / 2));
    };

    const drawPixalated = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, w, h);
      ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    };

    img.onload = selected ? draw : drawPixalated;
    img.src = `https://github.com/${member}.png?size=160`;
  }, [member, selected, canvasRef]);

  return (
    <a
      className="Member"
      href={`https://github.com/${member}`}
      title={member}
      onClick={(e) => {
        e.preventDefault();
        if (!selected) {
          setSelected(member);
        } else {
          window.open(e.currentTarget.href);
        }
      }}
    >
      <canvas
        className={selected ? 'selected' : ''}
        ref={canvasRef}
        width={160}
        height={160}
      />
    </a>
  );
};

export default Member;
