import { closeAlert } from '../../redux/actions/modal-actions';
import { StateKernel } from '../../state-kernel';
import { IModalMessageState } from '../../state/modals-state';
import { ModalMessageHelper } from './modal-message-helper';
import { IModalState } from '../../state/modals-state';

export class AlertKernel extends StateKernel<IModalMessageState> {
    private modalMessageHelper: ModalMessageHelper;

    public onFramework7Set(framework7: any) {
        this.modalMessageHelper = new ModalMessageHelper(framework7, [{
            text: 'Ok',
            onClick: () => this.dispatchAction(closeAlert())
        }]);
    }

    protected getState(state: IModalState) {
        return state.modalMessage;
    }

    protected handleStateChange(state: IModalMessageState) {
        if (state.modalMessageType === 'alert') {
            this.modalMessageHelper.handleStateChange(state);
        }
    }
}