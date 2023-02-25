import { Component } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countLeaveFeedback = (option) => {
    this.setState(state => {
      return {
        [option]: state[option] + 1
      }
    })
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = ((good * 100) / countTotalFeedback).toFixed(0);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.countLeaveFeedback} />
        {this.state === 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />) : (<Notification message="There is no feedback!" />)}
        
          
    </Section>
  );
 }
};
