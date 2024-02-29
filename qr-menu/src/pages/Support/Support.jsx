import Button from '../../components/Button/Button';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';
function Support() {
  return (
    <AppLayout>
      <div className="block-title">
        <h1 className="page-title">Support-Page</h1>

        <div>
          <Button variant="custom">Back</Button>
          <Button>Save</Button>
        </div>
      </div>
    </AppLayout>
  );
}

export default Support;
