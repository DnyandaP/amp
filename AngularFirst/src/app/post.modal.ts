export default class Post {
    public postType: string;
    public postDate: string;
    public checkEligibiltyTotal: string;
    public validateTransactionTotal: string;
    public manageLoansEligibilityTotal: string;
    public calculateMLATotal: string;
    public checkEligibiltyFailed: string;
    public validateTransactionFailed: string;
    public manageLoansEligibilityFailed: string;
    public calculateMLAFailed: string;
    public checkEligibiltyPassed: string;
    public validateTransactionPassed: string;
    public manageLoansEligibilityPassed: string;
    public calculateMLAPassed: string;
    public folderLink: string;

    public postFailed: string;
    public postPassed: string;
    public postValue: string;
    public postLink: string;
    public postValueMedia: any;

    public likeCount: number;
    public subscribeCount: number;
    public commentList: any[];

    public constructor() {
        // DEFAULT ASSUMPTION
        this.postType = 'TEXT';
        this.postValue = '';
        this.postDate='';
        this.postPassed='';
        this.postFailed='';


        this.likeCount = 0;
        this.subscribeCount = 0;
        this.commentList = [];
    }
}