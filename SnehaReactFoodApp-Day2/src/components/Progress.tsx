import * as React from 'react';

class Progress extends React.Component {
    public render() {
        return (
            <div className="progress">
                <div className ="progress-bar progress-bar-striped progress-bar-animated"
                 role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>{}</div>
            </div>
        )
    }
}

export default Progress;