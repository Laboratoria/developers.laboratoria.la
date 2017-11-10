import React from 'react';
import Section from './Section';
import members from '../members.json';


const styles = {
  root: {
    flexWrap: 'wrap',
  },
  a: {
    lineHeight: 0,
  },
  img: {
    width: 160,
  },
};


class Member extends React.Component {

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const { member } = this.props;
    const { canvas } = this.refs;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const w = canvas.width * 0.05;
    const h = canvas.height * 0.05;

    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.font = '14px "Raleway", sans-serif';

    const draw = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      ctx.fillStyle = '#F7B617';
      ctx.fillRect(0, 130, canvas.width, canvas.height);
      ctx.fillStyle = '#333';
      ctx.fillText(`@${member.login}`, 10, 150);
    };

    const drawPixalated = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, w, h);
      ctx.drawImage(canvas, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    };

    img.onload = () => {
      drawPixalated();
    };

    img.src = `${this.props.member.avatar_url}&size=160`;

    canvas.addEventListener('mouseover', () => draw());
    canvas.addEventListener('mouseleave', () => drawPixalated());
  }

  render() {
    const { member } = this.props;
    return (
      <a href={member.html_url} target="_blank" style={styles.a}>
        <canvas ref="canvas" width={160} height={160} />
      </a>
    );
  }

}


const Members = props => (
  <Section style={styles.root}>
    <h2>Quiénes somos?</h2>
    {members.map(member => (
      <Member key={member.id} member={member} />
    ))}
  </Section>
);


export default Members;
