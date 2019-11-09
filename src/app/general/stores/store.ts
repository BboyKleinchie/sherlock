import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export abstract class Store<T> {
    protected storeResults: T;
    protected storeSubject: BehaviorSubject<T>;

    // must pass in a new object of the specific type
    public constructor(results: T) {
        this.storeResults = results;
        this.storeSubject = new BehaviorSubject<T>(this.storeResults);
    }

    public setStoreResults(storeResults: T) {
        this.storeResults = storeResults;
        this.emitChange();
    }
    
    public clearStoreResults(): void {
        this.storeResults = null;
        this.emitChange();
    }

    public subscribe(
        unsubscribeSubject: Subject<void>,
        onChange: (storeResults: T) => void
    ): void {
        this.storeSubject
            .pipe(takeUntil(unsubscribeSubject))
            .subscribe(onChange);
    }

    protected emitChange(): void {
        this.storeSubject.next(this.storeResults);
    }
}