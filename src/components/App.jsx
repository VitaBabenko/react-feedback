import { Component } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countLeaveFeedback = (e) => {
    const keys = Object.keys(this.state);
    console.log(keys);
     for(const key of keys) {
           console.log(key);
       }
  //   this.setState(prevState => {
  //     return {
       
  //    }
  //  })
  }

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.countLeaveFeedback} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
    </Section>
  );
 }
};
