import React, { Component } from 'react'
import PropTypes from 'prop-types';
//the tab structure is taken from alligator.io/react/tabs-component/

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }
  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }
  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ul className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            if (label in this.props.visibleTabs){
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  name={this.props.visibleTabs[label]}
                  onClick={onClickTabItem}
                />
              );
            }
          })}
        </ul>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}


class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }
  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;
    let className = 'tab-list-item';
    if (activeTab === label) {
      className += ' tab-list-active';
    }
    return (
      <li
        className={className}
        onClick={onClick}
      >
        {this.props.name}
      </li>
    );
  }
}

export default Tabs
